import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        productList: [
            { name: 'Banana Skin', price: 20 },
            { name: 'Shiny Star', price: 40 },
            { name: 'Green Shells', price: 60 },
            { name: 'Red Shells', price: 80 }
          ] 
    },
    getters: {
        saleProductList: state => {
            let saleProductList = state.productList.map( p => {
                return {
                    name: '**' + p.name + '**',
                    price: p.price / 2
                }
            });
            
            return saleProductList
        }
    },
    mutations: {
        reducePrice: (state, payload) => {
            state.productList.forEach(p => {
                p.price -= payload
            });
        }
    },
    actions: {
        reducePrice: (context, payload) => {
            setTimeout(function(){
                context.commit('reducePrice', payload)
            }, 2000)
        }
    }
})
