import buildTransformer from 'simple-ts-transform'
import { Context } from './transformer/Context'
import { ImportDeclarationVisitor } from './transformer/ImportDeclarationVisitor'
import { MacroVisitor } from './transformer/MacroVisitor'

export * from './macro'
export { run } from '@oclif/command'

const transformer = buildTransformer(Context, [
  ImportDeclarationVisitor,
  MacroVisitor,
])

export default transformer
