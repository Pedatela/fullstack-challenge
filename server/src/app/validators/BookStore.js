import * as Yup from 'yup'

export default async (req, res, next) => {
    try {
        const schema = Yup.object().shape({
            name: Yup.string().required(),
            author: Yup.string().required().min(6),
            description: Yup.string().required(),
            image: Yup.string().required(),
        });
        await schema.validate(req.body, { abortEarly: false })
        return next()
    } catch (err) {
        return res.status(400).json({ error: 'Validation fails', data: err.inner })
    }
}