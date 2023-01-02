import styles from 'styled-components';

export const Container = styles.div`

    padding: 4rem 0;

    h1 {
        margin: 3rem 0;
    }

    .movie {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    img {
        width: 300px;
        border-radius: 1rem;
    }

    .details {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-left: 2rem;
        max-width: 50%;
    }

    button {
        background: #6654da;
        border: none;
        cursor: pointer;
        border-radius: 1rem;
        color: #fff;
        padding: 0.8rem 2rem;
        margin-top: 1rem;
        font-size: 1rem;
        transition: 0.3s;
    }

    button:hover {
        background: #4d3fa8;
    }

    span {
        line-height: 130%;
        margin-top: 1rem;
        font-size: 110%;
    }

    .release-date {
        opacity: 0.5;
    }
`;