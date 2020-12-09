import BaseResource from 'base'

class CrudResource extends BaseResource {
    create(body) {
        return this.request.send(this.endpoint, 'POST', {
            ...body,
            type: singularize(this.endpoint)
        })
    }

    delete(id) {
        return this.request.send(`${this.endpoint}/${id}`, 'DELETE')
    }

    update(id, body, token = null) {
        return this.request.send(
            `${this.endpoint}/${id}`,
            'PUT',
            {
                ...body,
                type: singularize(this.endpoint)
            },
            token
        )
    }
}

export default CrudResource
