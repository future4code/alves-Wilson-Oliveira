import React from 'react'
import styled from 'styled-components'
import './styles.css'

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({ completa }) => (completa ? 'line-through' : 'none')};
`

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`

class App extends React.Component {
  state = {
    tarefas: [],
    inputValue: '',
    filtro: ''
  }

  componentDidUpdate() {
    this.DidUpdatFunctiom()

  };

  componentDidMount() {
    this.DidMounthFunction()
  };

  DidUpdatFunctiom = () => {
    localStorage.setItem("texto", this.state.inputValue)
  }

  DidMounthFunction = () => {
    const texto = localStorage.getItem("texto");
    this.setState({ inputValue: texto });
    let lista = localStorage.getItem("lista");
    const listaConvertida = JSON.parse(lista);

    listaConvertida && this.setState({ tarefas: listaConvertida });
  }

  criaTarefa = () => {
    let novatarefa = {
      id: Date.now(),
      texto: this.state.inputValue,
      completa: false
    }

    const novaListaTarefas =
      [...this.state.tarefas, novatarefa]
    this.setState({ tarefas: novaListaTarefas, inputValue: "" })
    localStorage.setItem("lista", JSON.stringify(novaListaTarefas))

  }

  onChangeInput = (event) => {
    this.setState({ inputValue: event.target.value })
  }


  selectTarefa = (id) => {
    const selecionarLista = this.state.tarefas.map((tarefaSelect) => {
      if (id === tarefaSelect.id) {
        const novostatus = {
          ...tarefaSelect,
          completa: !tarefaSelect.completa
        }
        return novostatus
      } else {
        return tarefaSelect
      }
    })
    this.setState({ tarefas: selecionarLista })
    localStorage.setItem("lista", JSON.stringify(selecionarLista))
  }

  onChangeFilter = (event) => {
    this.setState({ filtro: event.target.value })
    localStorage.setItem("texto", this.state.inputValue)
  }

  render() {
    const listaFiltrada = this.state.tarefas.filter(tarefa => {
      switch (this.state.filtro) {
        case 'pendentes':
          return !tarefa.completa
        case 'completas':
          return tarefa.completa
        default:
          return true
      }
    })
    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput} />
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br />

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filter} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map(tarefa => {
            return (
              <Tarefa
                completa={tarefa.completa}
                onClick={() => this.selectTarefa(tarefa.id)}
              >
                {tarefa.texto}
              </Tarefa>
            )
          })}
        </TarefaList>
      </div>
    )
  }
}

export default App
