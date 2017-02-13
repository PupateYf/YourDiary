'use strict';

import Router from 'koa-router';

const router = new Router();

router.get('/test', async (ctx, next) => {
    ctx.body = {
        "status": "test page"
    }
})

export default router