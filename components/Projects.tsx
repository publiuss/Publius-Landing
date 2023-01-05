import Icon from "./Buttons/Icon";

const Projects = () => (
  <div className="flex flex-col items-center px-4 py-8 max-w-2xl mx-auto justify-center" style={{ paddingBottom: '0px'}}>
    <div className="sm:flex sm:flex-row block items-center justify-between sm:space-x-3 sm:space-y-0 space-y-2">
      <div className="text-4xl font-normal leading-[3.5rem] text-[25px]" style={{width: '100%'}}>
        Projects
      </div>
    </div>
    <div className="sm:flex-row block items-center justify-between sm:space-x-12 sm:space-y-8 space-y-4 border-t border-gray-[#E5E7ED]">
      {/* Beanstalk Project */}
      <div style={{display: 'inline-flex', flexDirection: 'column'}}>
        <h1 className="text-xl font-normal leading-[3.5rem] text-[20px]" style={{display: 'flex', alignItems: 'center'}}>
          <Icon
            style={{justifyContent: 'center', width: 'fit-content'}}
            icon="/assets/icon/beanstalk.png">
          </Icon>
          Beanstalk &emsp;
        </h1>
        <div className="block items-center" style={{alignItems: 'center', display: 'flex', flexDirection: 'row'}}>
            <a href="https://bean.money/beanstalk.pdf" target="_blank" rel="noreferrer">
              <Icon
                style={{width: 'fit-content'}}
                icon="/assets/icon/whitepaper.png">
              </Icon>
            </a>
            <a href="https://github.com/BeanstalkFarms/Beanstalk" target="_blank" rel="noreferrer">
              <Icon
                style={{width: 'fit-content'}}
                icon="/assets/icon/github.png">
              </Icon>
            </a>
            <a href="https://bean.money" target="_blank" rel="noreferrer">
              <Icon
                style={{width: 'fit-content'}}
                icon="/assets/icon/website.png">
              </Icon>
            </a>
        </div>
      </div>
      {/* Pipeline Project */}
      <div style={{display: 'inline-flex', flexDirection: 'column'}}>
        <h1 className="text-xl font-normal leading-[3.5rem] text-[20px]" style={{display: 'flex', alignItems: 'center'}}>
          <Icon
            style={{width: 'fit-content'}}
            icon="/assets/icon/pipeline.png">
          </Icon>
          Pipeline &emsp;
        </h1>
        <div className="block items-center" style={{alignItems: 'center', display: 'flex', flexDirection: 'row'}}>
            <a href="https://evmpipeline.org/pipeline.pdf" target="_blank" rel="noreferrer">
              <Icon
                style={{width: 'fit-content'}}
                icon="/assets/icon/whitepaper.png">
              </Icon>
            </a>
            <a href="https://github.com/BeanstalkFarms/Pipeline" target="_blank" rel="noreferrer">
              <Icon
                style={{width: 'fit-content'}}
                icon="/assets/icon/github.png">
              </Icon>
            </a>
            <a href="https://evmpipeline.org" target="_blank" rel="noreferrer">
              <Icon
                style={{width: 'fit-content'}}
                icon="/assets/icon/website.png">
              </Icon>
            </a>
        </div>
      </div>
      {/* Root Project */}
      <div style={{display: 'inline-flex', flexDirection: 'column'}}>
        <h1 className="text-xl font-normal leading-[3.5rem] text-[20px]" style={{display: 'flex', alignItems: 'center'}}>
          <Icon
            style={{width: 'fit-content'}}
            icon="/assets/icon/root.png">
          </Icon>
          Root &emsp;
        </h1>
        <div className="block items-center" style={{alignItems: 'center', display: 'flex', flexDirection: 'row'}}>
            <a href="https://roottoken.org/root.pdf" target="_blank" rel="noreferrer">
              <Icon
                style={{width: 'fit-content'}}
                icon="/assets/icon/whitepaper.png">
              </Icon>
            </a>
            <a href="https://github.com/RootToken/Root" target="_blank" rel="noreferrer">
              <Icon
                style={{width: 'fit-content'}}
                icon="/assets/icon/github.png">
              </Icon>
            </a>
            <a href="https://roottoken.org" target="_blank" rel="noreferrer">
              <Icon
                style={{width: 'fit-content'}}
                icon="/assets/icon/website.png">
              </Icon>
            </a>
        </div>
      </div>
    </div>
  </div>
);

export default Projects;
