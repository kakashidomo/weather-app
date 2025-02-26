import.meta.env.VITE_API_KEY_UNO


export const getEnvironments = () => {
    import.meta.env

    return {
        ...import.meta.env
    }
}