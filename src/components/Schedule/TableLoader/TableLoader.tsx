import React from 'react'
import ContentLoader from 'react-content-loader'
import cl from './TableLoader.module.scss'


const MyLoader = () => (
    <ContentLoader className={cl.loader}
        speed={2}
        backgroundColor='var(--bg-component)'
        foregroundColor='var(--bg)'
    >
        <rect x='0' y='0' rx='2' ry='2' width='100%' height='60'/>
        <rect x='0' y='80' rx='2' ry='2' width='100%' height='60'/>
        <rect x='0' y='160' rx='2' ry='2' width='100%' height='60'/>
        <rect x='0' y='240' rx='2' ry='2' width='100%' height='60'/>
        <rect x='0' y='320' rx='2' ry='2' width='100%' height='60'/>
        <rect x='0' y='400' rx='2' ry='2' width='100%' height='60'/>
    </ContentLoader>
)

export default MyLoader
