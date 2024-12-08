switch(error.code) {
    case 'ERR_NOT_FOUND':
        console.log('Error: Resource not found.');
        break;
    case 'ERR_INVALID_INPUT':
        console.log('Error: Invalid input provided.');
        break;
    case 'ERR_TIMEOUT':
        console.log('Error: Operation timed out.');
        break;
    case 'ERR_UNAUTHORIZED':
        console.log('Error: Unauthorized access.');
        break;
    default:
        console.log('An unknown error occurred.');
}

// Additional code can go here
