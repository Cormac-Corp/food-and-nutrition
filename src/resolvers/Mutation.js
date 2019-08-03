const Mutation = {
    async addUser(parent, args, { User }, info) {
        const user = new User(args.data)
        try {
            await user.save()
            const token = await user.generateAuthToken()
            return {
                user,
                token
            }
        } catch (e) {
            throw new Error("Unable to create user")
        }
    },
    async login(parent, args, { User }, info) {
        const {email, password } = args.data
        try {
            const user = await User.findByCredentials(email, password);
            const token = await user.generateAuthToken()
            return {
                user,
                token
            }
        } catch (e) {
            throw new Error(e)
        }
    },
    async logout(parent, args, { request, User }, info) {
        let req = request
        try {
            req.user.tokens = req.user.tokens.filter((token) => {
                return token.token !== req.token
            })
            await req.user.save()
    
            return "200"
    
        } catch (e) {
            throw new Error("Unable to logout")
        }
    },
    async logoutAll(parent, args, { request, User }, info) {
        let req = request;
        try {
            req.user.tokens = []
            await req.user.save()
            return "200"
        } catch (e) {
            throw new Error(e)
        }
    },
    async deleteMe(parent, args, { request }, info) {
        let req = request;
        try {
            await req.user.remove();
            return req.user
        } catch (e) {
            throw new Error("Unable to delete")
        }
    }
}
export default Mutation;