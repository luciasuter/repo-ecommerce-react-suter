import React, {Fragment} from 'react'
import {Loader} from 'semantic-ui-react'
import './Loading.css'

const Loading = () => {
    return (
        <Fragment>
            <Loader className="ui active centered inline loader"></Loader>
        </Fragment>
    )
}

export default Loading
