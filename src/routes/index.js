'use strict';

import Router from 'koa-router';
import compose from 'koa-compose';

import RouterAuth from './auth';

const router = new Router();

router.get('/', async (ctx, next) => {
    console.log('run here');
})

router.use('/auth', RouterAuth.routes(), RouterAuth.allowedMethods())

router.get('*', async (ctx, next) => {
    ctx.body = { status: 404 }
})

export default function routes() {
    return compose(
        [
            router.routes(),
            router.allowedMethods()
        ]
    )
}