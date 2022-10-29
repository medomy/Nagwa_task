import React from 'react'
interface Props {
    progress : number,
    maxProgress : number,
    minProgress : number
}
// componenet for progress bar and accepts props to calculate progress
const ProgressBar: React.FC<Props> = ({progress , maxProgress , minProgress}) => {
    return (
        <div className="progress">
            <div className="progress-bar" style={{ 'width': `${progress}%` }} role="progressbar" aria-valuenow={progress} aria-valuemin={minProgress} aria-valuemax={maxProgress}>{progress}%</div>
        </div>
    )
}
export default ProgressBar;