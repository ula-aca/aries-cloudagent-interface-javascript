import { Configuration } from '../src'

describe('aries-cloudagent-interface', () => {
  it('should be able to create a Configuration instance', () => {
    const configuration = new Configuration({
      basePath: 'http://ula.test:7002'
    })

    configuration.should.be.instanceOf(Configuration)
  })
})
