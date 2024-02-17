"use client"
import { FC } from 'react'

import { useAuth } from '@/hooks/useAuth'
import MaterialIcon from '../MaterialIcon'
import { IVideoPlayer } from './video.interface'

import { usePlayer } from './usePlayer'
import { useUpdateViews } from './useUpdateViews'

import styles from './VideoPlayer.module.scss'
import AuthPlaceholder from './AuthPlaceholder'

const VideoPlayer: FC<IVideoPlayer> = ({ videoSrc, slug }) => {
    useUpdateViews(slug)

    const { actions, video, videoRef } = usePlayer()
    const { user } = useAuth()

    return (
        <div
            className={`h-96 ${styles.wrapper}`}
        >
            {user ? (
                <>
                    <video
                        ref={videoRef}
                        className={styles.video}
                        src={`${videoSrc}#t=4`}
                        preload="metadata"
                    />
                    <div className={styles.progressbarContainer}>
                        <div
                            style={{ width: `${video.progress}%` }}
                            className={styles.progressbar}
                        />
                    </div>
                    <div>
                        <div className={styles.controls}>
                            <div>
                                <button onClick={actions.revert}>
                                    <MaterialIcon name='MdKeyboardDoubleArrowLeft' />
                                </button>

                                <button onClick={actions.toggleVideo}>
                                    <MaterialIcon name={video.isPlaying ? "MdPause" : "MdPlayArrow"} />
                                </button>

                                <button onClick={actions.forward}>
                                    <MaterialIcon name='MdKeyboardDoubleArrowRight' />
                                </button>
                            </div>

                            <div >
                                <div className={styles.timeControls} style={{ display: "flex" }}>
                                    <p className={styles.controlsTime}>
                                        {Math.floor(video.currentTime / 60) +
                                            ':' +
                                            ('0' + Math.floor(video.currentTime % 60)).slice(-2)}
                                    </p>
                                    <p> / </p>
                                    <p className={styles.controlsTime}>
                                        {Math.floor(video.videoTime / 60) +
                                            ':' +
                                            ('0' + Math.floor(video.videoTime % 60)).slice(-2)}
                                    </p>
                                </div>
                                <button onClick={actions.fullScreen} className={styles.fullscreen}>
                                    <MaterialIcon name='MdFullscreen' />
                                </button>
                            </div>
                        </div>

                    </div>
                </>
            ) : <AuthPlaceholder slug={slug} />}

        </div>
    )
}

export default VideoPlayer