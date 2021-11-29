import React, {Fragment} from 'react'
import {Loader} from 'semantic-ui-react'

const Loading = () => {
    return (
        <Fragment>
            <Loader className="ui active centered inline loader"></Loader>
        </Fragment>
    )
}

export default Loading
