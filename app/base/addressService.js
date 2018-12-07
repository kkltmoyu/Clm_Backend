import BaseClass from './baseClass'

export default class AddressService extends BaseClass{
    constructor() {
        super()
        this.bMapKey = 'kKZFxTOOO4Ykdl1BytsGmGmRPMG40ksC'
        this.locateByIp = this.locateByIp.bind(this)
        this.addressSuggestion = this.addressSuggestion.bind(this)
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
    }
    async addressSuggestion(ctx){
        return new Promise(async (resolve, reject) => {
            try {
                let paramsStr = 'ak=' + this.bMapKey + '&output=json&'
                paramsStr +=  ctx.query.query ? 'query=' + encodeURIComponent(ctx.query.query) + '&' : ''
                paramsStr +=  ctx.query.region ? 'region=' + encodeURIComponent(ctx.query.region) + '&' : ''
                paramsStr +=  ctx.query.city_limit !== undefined ? 'city_limit=' + ctx.query.city_limit + '&' : ''
                paramsStr +=  ctx.query.location ? 'location=' + ctx.query.location + '&' : ''
                if(paramsStr.length > 0){
                    paramsStr = paramsStr.slice(0,paramsStr.length - 1)
                    paramsStr = '?' + paramsStr
                }

                const url = 'http://api.map.baidu.com/place/v2/suggestion' + paramsStr
               
                let result = await this.fetch(url)
              
                if (result.status === 0) {
                    const addressList = result.result
                    resolve(addressList)
                }
                else {
                    reject('查询失败');
                }
            }
            catch (e) {
                console.log(e)
                reject(e);
            }
        })
    }
}