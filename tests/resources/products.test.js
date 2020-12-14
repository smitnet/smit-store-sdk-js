import 'regenerator-runtime/runtime'
import axios from 'axios';
import Products from '../mocks/products/product.mock';
import ProductsData from '../mocks/products/products.json';
import ProductData from '../mocks/products/product.json';

const { default: Config } = require("../../src/config")
const { default: SmitStore } = require("../../src/index")

const config = new Config({})
const sdk = new SmitStore(config)

jest.mock('axios')

describe('products resource', () => {
    test('should fetch all products', () => {
        const response = ProductsData

        axios.get.mockResolvedValue(response)

        return Products.All().then((data) => {
            expect(data).toEqual(response)
        })
    })

    test('should fetch single product', () => {
        const response = ProductData

        axios.get.mockResolvedValue(response)

        return Products.Get('some-random-identifier').then((data) => {
            expect(response.data.name).toEqual('Test 123')
            expect(response.data.slug).toEqual('test123')
            expect(response.data.category.id).toEqual(1)
        })
    })
})
