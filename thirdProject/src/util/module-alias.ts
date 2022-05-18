/*import * as path from 'path'; // pra pegar todos os caminhos
import moduleAlias from 'module-alias'; //// pra pegar o alias pra facilitar os caminhos

const files = path.resolve(__dirname,'../..');// const tá recebendo um método do path, mas de onde sairam esses parametros?

//cada @ aqui dentro funciona como um decoretor ou um sinal que eu vou poder usar fora daqui
moduleAlias.addAliases({
    //??????????????????????
    //path.join (firstarg=fromPath, secondarg = request , thirdarg=alias)
    //fromPath - Full path of the file from which `require` was called
  // request - The path (first argument) that was passed into `require`
  // alias - The same alias that was passed as first argument to `addAlias` (`@src` in this case)
    '@src': path.join(files,'src'),
    '@modules': path.join(files,'src/app/modules'),
    '@test':path.join(files,'test')

})*/


import * as path from 'path'
import moduleAlias from 'module-alias'
const files = path.resolve(__dirname, '../..')
moduleAlias.addAliases({
    '@src': path.join(files, 'src'),
    '@controllers': path.join(files, 'src/app/controllers'),
    '@test': path.join(files, 'test'),
});
