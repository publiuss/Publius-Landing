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
          <Icon icon="/assets/icon/beanstalk.png"/>
          Beanstalk &emsp;
        </h1>
        <div className="block items-center" style={{alignItems: 'center', display: 'flex', flexDirection: 'row'}}>
          <Icon icon="/assets/icon/whitepaper.png" href="https://bean.money/beanstalk.pdf"/>
          <Icon icon="/assets/icon/github.png" href="https://github.com/BeanstalkFarms/Beanstalk"/>
          <Icon icon="/assets/icon/website.png" href="https://bean.money"/>
          <Icon icon="/assets/icon/history.png" href="https://github.com/BeanstalkFarms/Beanstalk-Whitepaper/tree/master/version-history"/>
        </div>
      </div>
      {/* Pipeline Project */}
      <div style={{display: 'inline-flex', flexDirection: 'column'}}>
        <h1 className="text-xl font-normal leading-[3.5rem] text-[20px]" style={{display: 'flex', alignItems: 'center'}}>
          <Icon icon="/assets/icon/pipeline.png"/>
          Pipeline &emsp;
        </h1>
        <div className="block items-center" style={{alignItems: 'center', display: 'flex', flexDirection: 'row'}}>
          <Icon icon="/assets/icon/whitepaper.png" href="https://evmpipeline.org/pipeline.pdf"/>
          <Icon icon="/assets/icon/github.png" href="https://github.com/BeanstalkFarms/Pipeline"/>
          <Icon icon="/assets/icon/website.png" href="https://evmpipeline.org"/>
          <Icon icon="/assets/icon/history.png" href="https://github.com/BeanstalkFarms/Pipeline-Whitepaper/tree/master/version-history"/>
        </div>
      </div>
      {/* Root Project */}
      <div style={{display: 'inline-flex', flexDirection: 'column'}}>
        <h1 className="text-xl font-normal leading-[3.5rem] text-[20px]" style={{display: 'flex', alignItems: 'center'}}>
          <Icon icon="/assets/icon/root.png"/>
          Root &emsp;
        </h1>
        <div className="block items-center" style={{alignItems: 'center', display: 'flex', flexDirection: 'row'}}>
          <Icon icon="/assets/icon/whitepaper.png" href="https://roottoken.org/root.pdf"/>
          <Icon icon="/assets/icon/github.png" href="https://github.com/RootToken/Root"/>
          <Icon icon="/assets/icon/website.png" href="https://roottoken.org"/>
          <Icon icon="/assets/icon/history.png" href="https://github.com/RootToken/Root-Whitepaper/tree/master/version-history"/>
        </div>
      </div>
    </div>
  </div>
);

export default Projects;
