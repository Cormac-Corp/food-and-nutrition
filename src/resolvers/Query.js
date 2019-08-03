const Query = {
    async me(parent, args, ctx, info) {
        const req = ctx.request;
        return req.user
    }
}
export default Query