import BaseClass from './baseClass'

export default class AddressService extends BaseClass {
    constructor() {
        super()
        this.bMapKey = 'kKZFxTOOO4Ykdl1BytsGmGmRPMG40ksC'
        this.locateByIp = this.locateByIp.bind(this)
        this.addressSuggestion = this.addressSuggestion(this)
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
                let result = await this.fetch('http://api.map.baidu.com/location/ip', {
                    ip: sourceIp,
                    ak: this.bMapKey,
                })
                if (result.status === 0) {
                    const cityInfo = {
                        name: result.content.address,
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
    },
    addressSuggestion(ctx){
        return new Promise(async (resolve, reject) => {
            try {
                let paramsStr = ''
                paramsStr +=  ctx.query.query ? 'query=' + ctx.query.query + '&' : ''
                paramsStr +=  ctx.query.region ? 'region=' + ctx.query.region + '&' : ''
                paramsStr +=  ctx.query.city_limit !== undefined ? 'region=' + ctx.query.city_limit + '&' : ''
                paramsStr +=  ctx.query.location ? 'location=' + ctx.query.location + '&' : ''
                paramsStr +=  ctx.query.ak ? 'ak=' + ctx.query.ak + '&' : ''
                if(paramsStr.length > 0){
                    paramsStr = paramsStr.slice(0,paramsStr.length - 1)
                    paramsStr = '?' + paramsStr
                }
                let result = await this.fetch('http://api.map.baidu.com/place/v2/suggestion' + paramsStr)
                if (result.status === 0) {
                    const addressList = result.result
                    resolve(addressList)
                }
                else {
                    reject('查询失败');
                }
            }
            catch (e) {
                reject(e);
            }
        })
    }
}