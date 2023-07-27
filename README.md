# MQTT Examples

## Setup

`npm i`

## Files

`subscriber1-666.js` will receive messages for **car/bmw/c-wa666/#**  
`subscriber1-999.js` will receive messages for **car/bmw/c-wa666/#**  
`subscriber1-all.js` will receive messages for **car/#**  

## Examples Version 3.1.1

### Basic usage

You will get examples how MQTT basically works and how Last will testament is working  

1. Start all 3 subscriber1 666, 999, all  
2. Execute `3.1.1/publisher1.js` to send a message to different car topics  
3. Execute `3.1.1/publisher2-lwt.js` to see *Last will* messages example

### QoS

You will get an example, how QoS 2 is working  

1. Start `subscriber3-qos.js` and `subscriber3-qos2.js`
2. Execute `3.1.1/publisher3-qos0.js`, see how message is arrived
3. Stop `subscriber3-qos0.js` and execute `3.1.1/publisher3-qos0.js` again
4. Start `subscriber3-qos0.js` again and see if missed massage come in?
5. Stop `subscriber3-qos2.js` and execute `3.1.1/publisher3-qos2.js` again
6. Start `subscriber3-qos2.js` again and see if missed massage come in?

### Retain messages

You will get an example, how Retain messages are working  

1. Start all 3 subscriber1 666, 999, all  
2. Run `3.1.1/publisher4-retain.js` and see how, message arrived
3. Stop `subscriber1-999.js` and after 5 seconds start again. See how last message was deliverd

## Examples Version 5

### Shared Topics

This example demonstrate, how shared topics are working, which is a MQTT 5 function.  

1. Start `subscriber6-shared1.js` multiple times. (At least two times to understand the function)
2. Start `5/publisher5-shared.js` and see, how messages are distributed over subscriber 


# License

Do whatever you want with the code from this repository.