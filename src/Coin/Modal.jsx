import react, { useEffect, useState } from "react"
import reactDom from "react-dom";
import Modal from "react-modal"
import Chart from "../Chart/Chart";


export default (props)=>{
    
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    };

    

    const data = {
        labels: [...Array(30).keys()],
        datasets: [
          {
            label: props.coinName,
            data: props.history,
            fill: false,
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgba(255, 99, 132, 0.2)',
          },
        ],
      };
      
      const options = {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: false,
              },
            },
          ],
        },
      };
    
    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        // subtitle.style.color = '#f00';
    }
    
    function closeModal() {
        props.setIsOpen(false);
    }
    
    return (
        <Modal
        isOpen={props.modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        >
        <button onClick={closeModal}>Fechar</button>
        <div>
            <Chart data= {data} options={options} coinName= {props.coinName}/>
            
        </div>
        </Modal>
        )
        
    }