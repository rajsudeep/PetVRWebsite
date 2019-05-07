import { h, Component } from 'preact'
import { Entity, Scene } from 'aframe-react'

const COLORS = ['#D92B6A', '#9564F2', '#FFCF59']

class Main extends Component {
  constructor() {
    super()
    this.state = {
      colorIndex: 0,
      sphere1: { x: -11, y: 4, z: -16 },
      sphere2: { x: 11, y: 4, z: -16 }
    }
  }

  changeColor() {
    const colors = ['red', 'orange', 'yellow', 'green', 'blue']
    this.setState({
      color: colors[Math.floor(Math.random() * colors.length)]
    })
  }

  render() {
    return (
      <Scene
          environment={{
            preset: 'forest',
            seed: 10,
            skyType: 'gradient',
            lightPosition: { x: 0.0, y: 0.03, z: -0.5 },
            fog: 0.50,
            playArea: 1.2,
            ground: 'hills',
            groundColor: "#d1c2d1",
            groundYScale: 200,
            groundTexture: 'none',
            dressing: 'none',
            dressingAmount: '70',
            dressingColor: "#618955",
            dressingScale: 1,
            gridColor: "#d19dcd",
            grid: 'xlines',
            dressingVariance: { x: 15, y: 15, z: 15}
          }}
        >
        <a-assets>
          <video id="videogame" autoplay loop="true" src="img/petsampleclip.mp4"></video>
          <img id="bbtree" src="img/bbTreeanimslowedVR6x.gif"></img>
          <img id="banana" src="img/banana.gif"></img>
        </a-assets>
        <Entity
          primitive="a-image"
          src="#bbtree"
          height="10"
          width="8"
          position="0 5 29.412"
          rotation="0 0 0"
        />
        <Entity
          primitive="a-image"
          src="#bbtree"
          height="10"
          width="8"
          position="0 5 -29.412"
          rotation="0 0 0"
        />
        <Entity
          primitive="a-image"
          src="#bbtree"
          height="10"
          width="8"
          position="8 5 28.048"
          rotation="0 20 0"
        />
        <Entity
          primitive="a-image"
          src="#bbtree"
          height="10"
          width="8"
          position="-8 5 28.048"
          rotation="0 -20 0"
        />
        <Entity
          primitive="a-image"
          src="#bbtree"
          height="10"
          width="8"
          position="8 5 -28.048"
          rotation="0 -20 0"
        />
        <Entity
          primitive="a-image"
          src="#bbtree"
          height="10"
          width="8"
          position="-8 5 -28.048"
          rotation="0 20 0"
        />
        <Entity
          primitive="a-image"
          src="#bbtree"
          height="10"
          width="8"
          position="15.338 5 24.692"
          rotation="0 30 0"
        />
        <Entity
          primitive="a-image"
          src="#bbtree"
          height="10"
          width="8"
          position="15.338 5 -24.692"
          rotation="0 -30 0"
        />
        <Entity
          primitive="a-image"
          src="#bbtree"
          height="10"
          width="8"
          position="-15.338 5 24.692"
          rotation="0 -30 0"
        />
        <Entity
          primitive="a-image"
          src="#bbtree"
          height="10"
          width="8"
          position="-15.338 5 -24.692"
          rotation="0 30 0"
        />
        <Entity
          primitive="a-image"
          src="#bbtree"
          height="10"
          width="8"
          position="21.545 5 19.494"
          rotation="0 50 0"
        />
        <Entity
          primitive="a-image"
          src="#bbtree"
          height="10"
          width="8"
          position="21.545 5 -19.494"
          rotation="0 -50 0"
        />
        <Entity
          primitive="a-image"
          src="#bbtree"
          height="10"
          width="8"
          position="-21.545 5 19.494"
          rotation="0 -50 0"
        />
        <Entity
          primitive="a-image"
          src="#bbtree"
          height="10"
          width="8"
          position="-21.545 5 -19.494"
          rotation="0 50 0"
        />
        <Entity
          primitive="a-image"
          src="#bbtree"
          height="10"
          width="8"
          position="25.527 5 12.455"
          rotation="0 70 0"
        />
        <Entity
          primitive="a-image"
          src="#bbtree"
          height="10"
          width="8"
          position="25.527 5 -12.455"
          rotation="0 -70 0"
        />
        <Entity
          primitive="a-image"
          src="#bbtree"
          height="10"
          width="8"
          position="-25.527 5 12.455"
          rotation="0 -70 0"
        />
        <Entity
          primitive="a-image"
          src="#bbtree"
          height="10"
          width="8"
          position="-25.527 5 -12.455"
          rotation="0 70 0"
        />
        <Entity
          primitive="a-image"
          src="#bbtree"
          height="10"
          width="8"
          position="27.216 5 4.090"
          rotation="0 85 0"
        />
        <Entity
          primitive="a-image"
          src="#bbtree"
          height="10"
          width="8"
          position="-27.216 5 4.090"
          rotation="0 -85 0"
        />
        <Entity
          primitive="a-image"
          src="#bbtree"
          height="10"
          width="8"
          position="27.261 5 -4.361"
          rotation="0 95 0"
        />
        <Entity
          primitive="a-image"
          src="#bbtree"
          height="10"
          width="8"
          position="-27.261 5 -4.361"
          rotation="0 -95 0"
        />
        <Entity
          primitive="a-video"
          src="#videogame"
          width="13"
          height="13"
          position="0 7 -20"
        />
        <Entity
            text-geometry={{
              value: 'TECHNICAL DIFFUCKICULTIES',
              weight: 'normal',
              bevelEnabled: false,
              bevelSize: 0,
              curveSegments: 0,
              height: .50,
              size: 1
            }}
            material={{
              shader: 'standard',
              color: '#FFCF59',
              roughness: 0.050,
              width: 512,
            }}
            position={{ x: -9.5, y: 13, z: -20 }}
        />
        <Entity primitive="a-camera" look-controls>
          <Entity
            primitive="a-cursor"
            acceleration="800"
            cursor={{ fuse: false }}
            material={{ color: 'white', shader: 'flat', opacity: 0.75 }}
            geometry={{ radiusInner: 0.005, radiusOuter: 0.007 }}
            event-set__1={{
              _event: 'mouseenter',
              scale: { x: 1.4, y: 1.4, z: 1.4 }
            }}
            event-set__2={{
              _event: 'mouseleave',
              scale: { x: 1, y: 1, z: 1 }
            }}
            raycaster={{
              objects: '.clickable'
            }}
          />
        </Entity>
        <Entity
          class="clickable"
          geometry={{
            primitive: 'plane',
            height: 6,
            width: 9
          }}
          material={{
            color: '#4b274b',
            opacity: .80
          }}
          text={{
            font: 'monoid',
            width: 8,
            anchor: 'center',
            baseline: 'center',
            value: "WELCOME TO PSYCH-E-TILLA! \n\n WE MAKE WHOLESOME GAMES ^_^ \n \n WHAT WE'RE CURRENTLY SHOWCASING HERE ARE PROTOTYPE FEATURES OF OUR FIRST GAME IN DEVELOPMENT.",
            align: 'center',
            color: '#FFCF59',
            xOffset: 10,
            zOffset: .1
          }}
          events={{
            click: this._handleClick.bind(this)
          }}
          rotation="0 40 0"
          position={this.state.sphere1}
          animation__oscillate={{
            property: 'position',
            dur: 2000,
            dir: 'alternate',
            easing: 'linear',
            loop: true,
            from: this.state.sphere1,
            to: {
              x: this.state.sphere1.x,
              y: this.state.sphere1.y + 0.25,
              z: this.state.sphere1.z
            }
          }}
        />
        <Entity
          class="clickable"
          geometry={{
            primitive: 'plane',
            height: 6,
            width: 9,
          }}
          material={{
            color: '#4b274b',
            opacity: .80
          }}
          text={{
            font: 'monoid',
            width: 8,
            anchor: 'center',
            baseline: 'center',
            value: "\n \n ABOUT THIS GAME: \n\n MINDLESSLY AVOID OBSTACLES AS YOU HEARTILY GUIDE YOUR EAGER DEMON PET THROUGH LIFE. TRAVELING TOO FAR FROM YOUR PET WILL SCARE THEM. TRAVELING TOO CLOSE AND YOUR PET WILL OVERWHELM YOU. BALANCE IS KEY FOR A STABLE JOURNEY! \n\n\n ",
            align: 'center',
            color: '#FFCF59',
            xOffset: 10,
            zOffset: .1,
            wrapCount: 40
          }}
          events={{
            click: this._handleClick.bind(this)
          }}
          position={this.state.sphere2}
          rotation="0 -40 0"
          animation__oscillate={{
            property: 'position',
            dur: 2000,
            dir: 'alternate',
            easing: 'linear',
            loop: true,
            from: this.state.sphere2,
            to: {
              x: this.state.sphere2.x,
              y: this.state.sphere2.y + 0.25,
              z: this.state.sphere2.z
            }
          }}
        />
        <Entity
          position="0 3 8"
          geometry={{
            primitive: 'box',
            height: 2,
            width: 2
          }}
          material={{
            alphaTest: 0,
            shader: 'gif',
            src: '#banana'
          }}
        />
      </Scene>
    )
  }
  _handleClick() {
    this.setState({
      colorIndex: (this.state.colorIndex + 1) % COLORS.length
    })
  }
}

export default Main
