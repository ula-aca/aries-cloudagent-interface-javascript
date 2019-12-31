import * as ACAInterface from '../src'
import * as ACAGenerated from '../generated/openapi/index'

describe('@ula-aca/aries-cloudagent-interface', () => {
  it('should export everything from the generated openapi directory', () => {
    ACAInterface.should.deep.equal(ACAGenerated)
  })
})
