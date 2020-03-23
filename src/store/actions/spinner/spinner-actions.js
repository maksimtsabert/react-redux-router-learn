export const SHOW_SPINNER = 'SHOW_SPINNER'

export function showSpinner(loading) {
    return { type: SHOW_SPINNER, payload: { loading } }
}
