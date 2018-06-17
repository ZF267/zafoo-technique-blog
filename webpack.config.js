var webpack=require('webpack');
var path=require('path');

module.exports={
    entry:'./src/js/app.js',
    module:{
        loaders:[
        {
            test:/\.js$/,
            exclude:/(node_modules)/,
            loader:'babel-loader',
            query:{
                presets:['react','es2015']
            }
        },{
            test:/\.css$/,
            loader:'style-loader!css-loader'
        },{
    test:/\.json$/,
    loader:'json-loader'
}
]
},
output:{
	filename:'bundle.js',
        path:__dirname+'/dist'       
        }
	
}