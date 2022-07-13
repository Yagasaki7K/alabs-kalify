import styled from 'styled-components'
import colors from "./Colors";

const LastNewsDetails = styled.div`
    display: flex;
    justify-content: left;
    margin-left: 22rem;

    @media (max-width: 1366px) {
        margin-left: 3.5rem;
    }
    
    padding: 30px 5rem;

    .lastnews {
        .header {
            border-bottom: 2px solid ${colors.blue};
            width: 60rem;

            p {
                width: 9.5rem;
                background: ${colors.blue};
                color: ${colors.white};
                padding: 5px 10px;
                margin-bottom: -2px;
                font-weight: bold;
            }
        }

        .content {
            margin-top: 1rem;
            display: flex;
            border-bottom: 1px solid ${colors.graylight};

            img {
                width: 19rem;
                height: 14rem;
                object-fit: cover;
                margin-bottom: 1rem;

                :hover {
                    opacity: 0.8;
                    transition: 1s;
                }
            }

            .left-content {
                margin-left: 1rem;

                a {
                    text-decoration: none;
                    color: ${colors.black};
                    font-family: 'Poppins', sans-serif;

                    :hover {
                        color: ${colors.blue}
                    }
                }

                h1 {
                    font-size: 1.5rem;
                    width: 40rem;
                    margin-top: .5rem;
                    line-height: 24px;
                }

                i {
                    font-style: normal;
                    color: ${colors.graydark};
                }

                p {
                    width: 40rem;
                }
            }
        }
    }
`

export default LastNewsDetails