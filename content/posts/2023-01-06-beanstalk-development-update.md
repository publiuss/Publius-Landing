---
title: "Beanstalk Development Update"
subtitle: "Current developments of the DeFi stack outlined in the piece by members of the Beanstalk DAO."
author: Publius
description: >-
  This is a complementary piece to “Worthless Tech” with additional details on current developments of the DeFi stack outlined in the piece by members of the Beanstalk DAO.
date: 2023-01-06T17:57:57.629Z
image: /assets/uploads/beanstalk-building.png
tag: Beanstalk
---

_“Rome ne fu[t] pas faite toute en un jour.” (Rome wasn’t built in a day.) - The Collection Li Proverbe au Vilain, ~1190_

This is a complementary piece to “Worthless Tech” with additional details on current developments of the DeFi stack outlined in the piece by members of the Beanstalk DAO. While there is lots of work to be done in addition to on-chain development, the scope of this piece is limited to it.

## The Exchange

The DEX is itself composed of four interconnected parts which can each be upgraded permissionlessly and independently. Wells, Pumps, Aqueducts (v0 currently in development) and Tractor (v0 in audit) implement a DEX architecture that will minimize toxic flow and gas costs to enable profitable market making and maximize composability with other network-native protocols. Together, they can facilitate arbitrary exchanges and deep liquidity on-chain. In principle, Wells, Pumps, Aqueducts and Tractor do not impose or extract fees and are governance free.

In a single Well, a liquidity provider (LP) can encode an n-dimensional order to exchange the assets currently lent to the contract for an arbitrary set of other assets along a polynomial curve for each acceptable exchange. Furthermore, the inputs to the polynomial curves can be arbitrary functions, that themselves take an arbitrary set of on-chain data as inputs. In practice, each Well facilitates the encoding of an entire trading strategy on-chain that is updated in real time (i.e., the order will always reflect the current state of the network) and the assets in the Well can be used to provide liquidity for n assets at once. When coupled with zero-knowledge technology and a network-layer oracle that updates off-chain data at the beginning of every block, Wells create the optimal execution environment for providing liquidity for arbitrary exchanges and have the ability to radically improve market efficiency compared to off-chain exchanges because every order is evaluated at the time a trade is executed against it with real-time information.  

Pumps facilitate the recording of specific data related to the liquidity in a Well on-chain. Because storing data on-chain is not free, only absolutely necessary data should be recorded. Each Well can be deployed with an arbitrary set of Pumps, such that only and exactly the data necessary to satisfy composability between the liquidity in the Well and arbitrary other protocols desired by the LP is recorded on-chain. Pumps create a minimalist, composable way for liquidity providers to minimize gas costs associated with taking their liquidity while maximizing the customizability for reusing their liquidity in other protocols.

Aqueducts are a registry to aggregate and index on-chain data from arbitrary oracles, including Pumps, to create permissionless and provable on-chain liquidity that can be seamlessly accessed by other network-native protocols. Instead of needing to know any information about the number of Wells that exist, their individual orders, their Pumps or the data contained therein, Aqueducts create a simple interface for other protocols to query the price and depth of any asset on-chain. However, Aqueducts are the most complex part of the DEX to implement in a gas-efficient fashion.

![dex](https://user-images.githubusercontent.com/88561107/211043595-88bb2115-a878-40b1-8e8e-7a73ce2402b5.png)

Over time, it is reasonable to expect that tried-and-tested Pump and Aqueduct implementations become standardized, such that manipulation resistant on-chain oracles become easy to use to create modular and composable proof of liquidity on-chain that can be securely and permissionlessly used by other protocols. A protocol can whitelist a set of Pumps and/or Aqueducts that are acceptable to read on-chain liquidity from. When deploying a Well, LPs can select the Pumps they want to include in the Well dependent on the requirements of the protocols they intend to use the liquidity in. Similar to Pumps and Aqueducts, it is reasonable to expect battle-tested components of Wells to become standardized such that the creation of secure and complex orders becomes more trivial and less expensive.                  

Tractor leverages EIP-712 to create the ability to sign a payload that encodes an arbitrary exchange order. In certain instances where there is no need to provide proof of liquidity it may be reasonable to post orders somewhere much cheaper than the network where the assets exist, such that only order cancellation and fulfillment has to happen on the more expensive network. Because the chain with the assets functions as the ultimate source of truth there is no need for consensus on orders. Therefore, if a sufficiently censorship resistant off-chain indexing protocol exists, Tractor allows for free order creation. While Tractor will become somewhat limited in its practical uses once the rest of the DeFi stack exists, there will always be exchanges that do not require proof of liquidity. Furthermore, the composable architecture of the DEX means that any work done enabling complex orders through Tractor will be reusable for Wells.

Tractor is sufficiently generalized to support more than just exchanges. In theory, Tractor can be used to create approvals for arbitrary actions on behalf of the account that creates the approval. Examples include Mowing Grown Stalk when the account has more than X Grown Stalk and Convert Deposits within the Silo under certain conditions (e.g., price, time below peg).

## Loan Generation

A LGF that facilitates the composition of arbitrary loans is unlikely to be implemented by a single factory contract, but instead a series of factory contracts that follow a standard interface. The Well Factory that will facilitate the deployment of Wells with existing assets, curves, functions, inputs and Pumps without writing a line of Solidity can be thought of as an early LGF. As LGF capabilities increase, so too will the complexity of loans that can be created and offered without writing any Solidity.

The other LGF we are aware is currently under development is a v0 Betting and Derivatives Factory. The Betting and Derivatives Factory will facilitate the minting of n-sided betting tokens that settle based on arbitrary logic that processes an arbitrary oracle (e.g., Chainlink, UMA, other smart contracts). Loan contracts that enforce arbitrary combinations of settlement rules and oracles will be deployable through the Betting and Derivatives Factory without writing any Solidity.

The v0 version of the Betting and Derivatives Factory will facilitate two n-sided betting pool types: bets that require a DEX and bets that do not (e.g., parimutuel pools). The primary distinction from a contract perspective is whether a single user mints one or n tokens per bet. For bets that require a DEX, the loan contract will mint all n tokens, which correspond to all n sides of the bet, at once, at which point the minter can sell any side(s) of the bet on the DEX they wish. Similarly, anyone that owns all n sides of a bet can redeem them for the collateral used to issue the tokens. For bets that do not require a DEX, the loan contract mints one token at a time, corresponding to the position bet on.

The Factory will also support an optional add only-mode which disables redemptions from the contract, optional arbitrary fee structures, an optional minting lock which prevents new tokens from being issued by the contract if arbitrary conditions are met, and arbitrary settlement logic (e.g., settlement time, oracles used, logical processing of oracles). There is also a related Oracle Factory that supports the creation of arbitrary on-chain oracles using existing oracle protocols or a new smart contract.

Examples of betting types that will be facilitated by the v0 Betting and Derivatives Factory, pending the implementation of associated settlement logic and oracles, include moneylines, spreads, futures, options, swaps (traditional and perpetual) and other derivatives. The ability to redeem tokens that represent every side of a bet from the contract that issued them will enable arbitrage opportunities that attract market makers. The combination of the two types of bets (i.e., bets that lock in odds upon sale on the DEX and bets that lock in upon some condition being met (e.g., time) allow for takers to choose between current odds and future odds at the time of taking.

## The Wedding

The liquidation engine necessary to integrate the DEX with the LGF will be implemented through support for stop-loss orders by Wells, which are currently under development. The obligation and hedging engines necessary to integrate the LGF with itself are currently in the design stage.

Whereas v0 of both the DEX and LGF are likely to be implemented within the next few months, the wedding protocol (name TBD) is likely to come into form over the course of the year. Hopefully there is a v0 of the wedding protocol before EOY.
