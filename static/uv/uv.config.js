self.__uv$config = {
    prefix: 'https://water-logger.github.io/unblocker/static/tiw/',
    bare:'https://bare.benrogo.net',
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: 'https://water-logger.github.io/unblocker/static/uv/uv.handler.js',
    bundle: 'https://water-logger.github.io/unblocker/static/uv/uv.bundle.js',
    config: 'https://water-logger.github.io/unblocker/static/uv/uv.config.js',
    sw: 'https://water-logger.github.io/unblocker/static/uv/uv.sw.js',
};
