import styled from 'styled-components';

const EmojiWrapper = styled.span`
    position: relative;                /* Allow absolute positioning of the circle */
    display: inline-flex;              /* Use inline-flex to center emoji */
    align-items: center;               /* Center the emoji vertically */
    margin-left: 5px;                 /* Spacing between text and emoji */
    font-size: 1.2rem;                 /* Adjust emoji size */
    
    &::before {
        content: '';                   /* Create a pseudo-element for the circle */
        position: absolute;            /* Position it absolutely within the wrapper */
        top: 50%;                     /* Center it vertically */
        left: 50%;                    /* Center it horizontally */
        transform: translate(-50%, -50%); /* Move it back to truly center */
        background-color: white;       /* Circle color */
        border-radius: 50%;            /* Make it a circle */
        width: 20px;                   /* Adjust width for smaller circle */
        height: 20px;                  /* Adjust height for smaller circle */
        z-index: -1;                   /* Send the circle behind the emoji */
        box-shadow: 0 0 2px rgba(0, 0, 0, 0.3); /* Optional: Add a subtle shadow for better visibility */
    }
`;

export default EmojiWrapper;
