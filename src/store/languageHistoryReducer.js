const languagesList = []

const languageHistoryReducer = (state = languagesList, {type, payload}) => {
    switch (type) {
        case "@languagesHistory":
            const languagesListCopy = Object.assign([], state)
            languagesListCopy.push(payload)
            return languagesListCopy
        default:
            return state
    }
}

export default languageHistoryReducer