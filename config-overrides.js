/**
 * 配置：
 * 1. 按需加载
 * 2. 修改主题
 */
const { override, fixBabelImports, addLessLoader } = require('customize-cra');

const PRIMARY_COLOR = '#722ED1';

module.exports = override(
    fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
    }),
    addLessLoader({
        javascriptEnabled: true,
        modifyVars: { '@primary-color': PRIMARY_COLOR },
    }),
);