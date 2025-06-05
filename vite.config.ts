

export default {
    resolve: {
        extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json']     //这个配置的具体作用是：1. 自动解析扩展名 ：当你在代码中导入模块时，如果没有明确指定文件扩展名，Vite 会按照数组中定义的顺序尝试添加这些扩展名来查找文件,可以通过import Component from './Component'而不是'./Component.tsx' 与{"compilerOptions": {"moduleResolution": "bundler"}}作用一样
    }
};