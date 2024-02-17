import { FC, useEffect, useState } from 'react'

import htmlToDraft from 'html-to-draftjs'
import draftToHtml from 'draftjs-to-html'
import { Editor } from 'react-draft-wysiwyg'
import { ContentState, EditorState, convertToRaw } from 'draft-js'

import { ITextEditor } from './form.interfaces'

import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import styles from './form.module.scss'

const TextEditor: FC<ITextEditor> = ({ onChange, value, placeholder, error }) => {
    const [isUpdated, setIsUpdated] = useState(false)
    const [editorState, setEditorState] = useState(EditorState.createEmpty())

    useEffect(() => {
        if (!isUpdated) {
            const defaultValue = value || ''
            const blocksFormHtml = htmlToDraft(defaultValue)

            const contentState = ContentState.createFromBlockArray(
                blocksFormHtml.contentBlocks,
                blocksFormHtml.entityMap
            )

            const newEditorState = EditorState.createWithContent(contentState)

            setEditorState(newEditorState)
        }
    }, [isUpdated, value])

    const onEditorStateChange = (editorState: EditorState) => {
        setIsUpdated(true)
        setEditorState(editorState)

        return onChange(draftToHtml(convertToRaw(editorState.getCurrentContent())))
    }

    return <div className={`${styles.common} ${styles.editWrapper} animation-fade`}>
        <label >
            <span>{placeholder}</span>
            <div className={styles.wrapper}>
                <Editor
                    editorState={editorState}
                    editorClassName={styles.editor}
                    toolbarClassName={styles.toolbar}
                    onEditorStateChange={onEditorStateChange}
                    spellCheck
                    toolbar={{
                        options: ['inline', 'list'],
                        inline: {
                            inDropdown: false,
                            className: undefined,
                            component: undefined,
                            dropdownClassName: undefined,
                            options: ['bold', 'italic', 'underline', 'strikethrough'],
                        },
                        list: {
                            inDrodown: false,
                            options: ['unordered', 'ordered'],
                        },
                    }}
                />
                {error && <div className={styles.error}>{error.message}</div>}
            </div>
        </label>
    </div>
}

export default TextEditor