import { Link } from 'react-router-dom'
import {TbTrash as IconTrash} from 'react-icons/tb'

const CardUser = ({avatarUrl, name, children, id, users, setUsers}) => {

    const {card, avatar, box, userName, text, buttonLink} = style

    const deleteUser = async (id) => {
        const response = await fetch('http://localhost/PJ3/ifsp-api-php/user/delete',{
            method: 'DELETE',
            body: JSON.stringify({id: id})
        })
        const result = await response.json()
        if(result?.success){
            const usersFiltered = users.filter((user) => {return user.id !== id})
            setUsers(usersFiltered)
        } else {
            console.error(result?.error)
        }
    }
  
    return (

				<div style={card}>
          <img style={avatar} src={avatarUrl} alt="Foto do Fulano"/>
          <div style={box}>
            <Link to={`/user/${id}`}>
                <h1 style={userName}>{name}</h1>
                <p style={text}>{children}</p>
            </Link>
            
            <IconTrash style={buttonLink} onClick={() => deleteUser(id)} />
          </div>
      	</div>

    )
  }
  
  const style = {
    avatar: {
        background: '#CCC',
        borderRadius: '50%',
        height: '50px',
        width: '50px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '0 10px 0 0'
        },
        card: {
            width: '300px',
            background: '#EEE',
            display: 'flex',
            padding: '10px',
            borderRadius: '10px',
            margin: '15px'
        },
        userName: {
            margin: 0,
            fontSize: '0.9rem'
        },
        text: {
            margin: 0
        },
        box: {
            width: '235px'
        },
        buttonLink: {
        cursor: 'pointer',
        padding: '5px',
        borderRadius: '5px'
    }
  }
  
  export default CardUser