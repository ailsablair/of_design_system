const path = require('path');

module.exports = async ({ config }) => {
  config.module.rules.push({
    test: /\.(woff|woff2|eot|ttf|svg)$/,
    use: [
      {
        loader: 'file-loader',
        options: {
	name: 'Aileron-Black-webfont.woff', 
	name: 'Aileron-BlackItalic-webfont.woff', 
	name: 'Aileron-Bold-webfont.woff', 
	name: 'Aileron-BoldItalic-webfont.woff', 
	name: 'Aileron-Heavy-webfont.woff', 
	name: 'Aileron-HeavyItalic-webfont.woff', 
	name: 'Aileron-Italic-webfont.woff', 
	name: 'Aileron-Light-webfont.woff', 
	name: 'Aileron-LightItalic-webfont.woff', 
	name: 'Aileron-Regular-webfont.woff', 
	name: 'Aileron-SemiBold-webfont.woff', 
	name: 'Aileron-SemiBoldItalic-webfont.woff', 
	name: 'Aileron-Thin-webfont.woff', 
	name: 'Aileron-ThinItalic-webfont.woff', 
	name: 'Aileron-UltraLight-webfont.woff', 
	name: 'Aileron-UltraLightItalic-webfont.woff', 
	name: ‘BarnebokBlack.woff', 
	name: ‘BarnebokBold.woff', 
	name: ‘BarnebokLight.woff', 
	name: ‘BarnebokMedium.woff', 
	name: ‘BarnebokRegular.woff', 
        },
      },
    ],
    include: path.resolve(__dirname, '../'),
  });

  return config;
};   