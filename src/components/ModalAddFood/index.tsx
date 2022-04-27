import {  useRef } from 'react';
import { FiCheckSquare } from 'react-icons/fi';

import { Form } from './styles';
import Modal from '../Modal';
import Input from '../Input';
type IFoodPlate = {
  id: number;
  name: string;
  image: string;
  price: number;
  description: string;
  category: string;
  available: boolean;
};

type ModalAddFoodProps = {
  isOpen: boolean;
  onRequestClose: () => void;
  handleAddFood: (food: Omit<IFoodPlate, 'id' | 'available'>) => void;
};  


export default function ModalAddFood ({isOpen,onRequestClose,handleAddFood}: ModalAddFoodProps){
  const formRef = useRef(null);
  
  const handleSubmit = async (data: IFoodPlate) => {

    handleAddFood(data);
    onRequestClose();
  };
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <h1>Novo Prato</h1>
        <Input name="image" placeholder="Cole o link aqui" />

        <Input name="name" placeholder="Ex: Moda Italiana" />
        <Input name="price" placeholder="Ex: 19.90" />

        <Input name="description" placeholder="Descrição" />
        <button type="submit" data-testid="add-food-button">
          <p className="text">Adicionar Prato</p>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );
}

