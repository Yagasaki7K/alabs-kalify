import { useState } from 'react'
import SideMenu from '../src/components/Login/SideMenu'
import LoginDetails from "../src/components/LoginDetails"
import DashboardDetails from "../src/components/DashboardDetails"
import postService from '../services/post.service'
import { storage } from '../client'
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'
import dynamic from "next/dynamic"
import "@uiw/react-md-editor/markdown-editor.css"
import "@uiw/react-markdown-preview/markdown.css"

const SoreyeAsuka = 'OnigiriHardcore'
const EVA02 = '0GkMepi*r]hj'

const MarkdownEditor = dynamic(
    () => import("@uiw/react-md-editor").then((mod) => mod.default),
    { ssr: false }
);

const Login = () => {
    const [author, setAuthor] = useState('')
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [image, setImage] = useState('')
    const [citation, setCitation] = useState('')
    const [linkCitation, setLinkCitation] = useState('')
    const [ytid, setYtid] = useState('')

    const [isLogged, setIsLogged] = useState(false)
    const [bodyPost, setBodyPost] = useState('# Corpo da Publicação')
    const Lgn = SoreyeAsuka
    const Pswd = EVA02

    function LoginAcess() {
        const getLogin = document.getElementById('Login').value
        const getPswd = document.getElementById('Password').value

        if (getLogin === Lgn && getPswd === Pswd) {
            setIsLogged(true)
        } else {
            alert('Login ou senha estão incorretos')
        }
    }

    async function sendData(){
        const NewPosts = {
            author,
            title,
            description,
            bodyPost,
            image: image.name,
            citation,
            linkCitation,
            ytid,
        }

            if (!author || !title || !description || !image) {
                alert('Por favor, preencha todos os campos')
            } else {
            await (postService.addPost(NewPosts))

            const storageRef = ref(storage, `/files/${Image.name}`)
            const uploadTask = uploadBytesResumable(storageRef, Image)

            uploadTask.on(
                "state_changed",
                (snapshot) => {
                    const percent = Math.round(
                        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                    )
                    console.log(percent)
                    /* show upload percentage? */
                },
                (error) => console.log(error),
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then((url) =>{
                        console.log(url)
                    })
                }
            )

                alert('Publicação criada com sucesso')
                location.assign("/posts")
            }
    }


    function collectData() {
        const formAuthor = document.getElementById('author')
        const resultAuthor = formAuthor.options[formAuthor.selectedIndex].text
        setAuthor(resultAuthor)

        const formTitle = document.getElementById('title')
        const resultTitle = formTitle.value
        setTitle(resultTitle)

        const formDescription = document.getElementById('description')
        const resultDescription = formDescription.value
        setDescription(resultDescription)

        const formCitation = document.getElementById('citation')
        const resultCitation = formCitation.value
        setCitation(resultCitation)

        const formLinkCitation = document.getElementById('linkcitation')
        const resultLinkCitation = formLinkCitation.value
        setLinkCitation(resultLinkCitation)

        const formYtid = document.getElementById('ytid')
        const resultYtid = formYtid.value
        setYtid(resultYtid)
    }

    function getImage(event) {
        setImage(event.target.files[0]);
    }

    if (isLogged === true) {
        return (
            <DashboardDetails>
                <SideMenu />

                <div className="content">
                    <div className="publi" id="publi">
                        <h1>Criar Publicações</h1>

                        <div className="form-group">
                            <form onSubmit={(e) => e.preventDefault()} onChange={() => collectData()}>

                                <div className="item">
                                    <label htmlFor="author">Autor*: </label>
                                    <select id="author">
                                        <option value={"Anderson 'Yagasaki' Marlon"}>Anderson Marlon</option>
                                    </select>
                                </div>

                                <div className="item">
                                    <label htmlFor="title">Título da Publicação*: </label>
                                    <input type="text" name="title" id="title" placeholder="Título da Publicação" required />
                                </div>

                                <div className="item">
                                    <label htmlFor="description">Descrição da Publicação*: </label>
                                    <textarea name="description" id="description" maxLength={126}
                                        placeholder="Descrição da Publicação (Max.126)" required />
                                </div>

                                <div className="item">
                                    <label htmlFor="image">Imagem da Publicação*: </label>
                                    <input type="file" name="image" id="image" onChange={getImage} required />
                                </div>

                                <div className="item-markdown">
                                    <label htmlFor="body">Conteúdo da Publicação*: </label>
                                    <MarkdownEditor height={300} value={bodyPost} onChange={setBodyPost} />
                                </div>

                                <div className="item">
                                    <label htmlFor="citation">Citação de Twitter: </label>
                                    <textarea name="citation" id="citation" placeholder="Uma citação que foi encontrada no Twitter ou em outra fonte" />
                                </div>

                                <div className="item">
                                    <label htmlFor="linkcitation">Link da Citação: </label>
                                    <input name="linkcitation" id="linkcitation" placeholder="https://twitter.com/Yagasaki7K/example" />
                                </div>

                                <div className="item">
                                    <label htmlFor="ytid">ID do Youtube: </label>
                                    <input name="ytid" id="ytid" placeholder="RfiKg_Sfg-o" />
                                </div>

                                <button onClick={sendData} className='sendbtn'>Enviar</button>
                                <button className='clrbtn'>Limpar</button>
                            </form>
                        </div>
                    </div>

                    <div className="stats" id="stats">
                        <h1>Estatísticas Gerais</h1>
                    </div>
                </div>
            </DashboardDetails>
        )
    } else {
        return (
            <LoginDetails>
                <div className="container">

                    <form onSubmit={(e) => e.preventDefault()}>
                        <img src="logotipo-white.png" alt="Logo" />
                        <input type="text" placeholder="Login" id="Login" required />

                        <input type="password" placeholder="Password" id="Password" required />

                        <button onClick={LoginAcess}>Acessar</button>
                    </form>
                </div>
            </LoginDetails>
        )}
    }

export default Login
