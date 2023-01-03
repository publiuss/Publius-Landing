const Projects = () => (
  <div className="flex flex-col items-center px-4 py-8 max-w-2xl mx-auto justify-center" style={{ paddingBottom: '0px'}}>
    <div className="sm:flex sm:flex-row block items-center justify-between sm:space-x-3 sm:space-y-0 space-y-2">
      <div className="text-4xl font-normal leading-[3.5rem] text-[25px]" style={{width: '100%'}}>
        Projects
      </div>
    </div>
    <div className="sm:flex sm:flex-row block items-center justify-between sm:space-x-12 sm:space-y-1 space-y-4 border-t border-gray-[#E5E7ED]">
      {/* Beanstalk Project */}
      <div style={{display: 'inline-flex'}}>
        <h1 className="text-xl font-normal leading-[3.5rem] text-[20px]">
          Beanstalk &emsp;
        </h1>
        <div className="sm:flex sm:flex-column block items-center">
          <p style={{fontSize: 'small'}}>
            <a className="blue-link" href="https://bean.money/beanstalk.pdf" target="_blank">Whitepaper</a>
            <br/>
            <a className="blue-link" href="https://github.com/BeanstalkFarms/Beanstalk" target="_blank">Github</a>
            <br/>
            <a className="blue-link" href="https://bean.money" target="_blank">Website</a>
          </p>
        </div>
      </div>
      {/* Pipeline Project */}
      <div style={{display: 'inline-flex'}}>
        <h1 className="text-xl font-normal leading-[3.5rem] text-[20px]">
          Pipeline &emsp;
        </h1>
        <div className="sm:flex sm:flex-column block items-center">
          <p style={{fontSize: 'small'}}>
            <a className="blue-link" href="https://evmpipeline.org/pipeline.pdf" target="_blank">Whitepaper</a>
            <br/>
            <a className="blue-link" href="https://github.com/BeanstalkFarms/Pipeline" target="_blank">Github</a>
            <br/>
            <a className="blue-link" href="https://evmpipeline.org" target="_blank">Website</a>
          </p>
        </div>
      </div>
      {/* Root Project */}
      <div style={{display: 'inline-flex'}}>
        <h1 className="text-xl font-normal leading-[3.5rem] text-[20px]">
          Root &emsp;
        </h1>
        <div className="sm:flex sm:flex-column block items-center">
          <p style={{fontSize: 'small'}}>
            <a className="blue-link" href="https://roottoken.org/root.pdf" target="_blank">Whitepaper</a>
            <br/>
            <a className="blue-link"href="https://github.com/RootToken/Root" target="_blank">Github</a>
            <br/>
            <a className="blue-link"href="https://roottoken.org" target="_blank">Website</a>
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Projects;
