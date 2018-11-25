import BaseClass from './baseClass'

export default class AddressService extends BaseClass {
    constructor() {
        super()
        this.bMapKey = 'kKZFxTOOO4Ykdl1BytsGmGmRPMG40ksC'
        this.locateByIp = this.locateByIp.bind(this)
    }
    locateByIp(ctx) {
        return new Promise(async (resolve, reject) => {
            let sourceIp = ctx.req.headers['x-forwarded-for'] ||
                ctx.req.connection.remoteAddress ||
                ctx.req.socket.remoteAddress ||
                ctx.req.connection.socket.remoteAddress;
            const ipArr = sourceIp.split(':');
            sourceIp = ipArr[ipArr.length - 1];
            // sourceIp = '101.41.86.155'
            try {
                let result = await this.fetch('	http://api.map.baidu.com/location/ip', {
                    ip: sourceIp,
                    ak: this.bMapKey,
                })
                if (result.status === 0) {
                    const cityInfo = {
                        point: result.content.point,
                        addressDetail: result.content.address_detail,
                    }
                    resolve(cityInfo)
                }
                else {
                    reject('定位失败');
                }
            }
            catch (e) {
                reject(e);
            }
        })
    }
}