import CubeImage from '../../assets/images/3D_Cube.png'
import './index.scss'

const CubeAnimation = ({ color = 'orange' }) => {
  return (
    <div className={`cube-container cube-${color}`}>
      <img
        className="cube-logo"
        src={CubeImage}
        alt="Animated Cube"
      />
    </div>
  )
}

export default CubeAnimation
