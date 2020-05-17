import React from 'react'
import { bind } from '../../../utils/bind'
import styles from './modal.module.css'
import { Link } from "react-router-dom";

const cx = bind(styles)

interface Props extends React.HTMLProps<HTMLButtonElement> {
  theme?: 'primary' | 'secondary'
  submit?: boolean
  isDisabled?: boolean
}

export const Modal: React.FunctionComponent<Props> = ({
  children,
  className,
  theme,
  submit,
  isDisabled,
  ...rest
}) => {
  return (
    <>
      <Link className={cx('button', className)} to={'#popup1'}>Let me Pop up</Link>
      <div id="popup1" className={cx('overlay', className)}>
        <div className={cx('popup', className)}>
          <h2>Here i am</h2>
          <Link className={cx('close', className)} to={'#'}>&times;</Link>
          <div className={cx('content', className)}>
            Thank to pop me out of that button, but now i'm done so you can close this window.
          </div>
        </div>
      </div>
    </>
  )
}
