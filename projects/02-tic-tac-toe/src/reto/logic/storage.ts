import { Board } from "../interface"

export const saveGameStorage = (board: Board[][], turn: string): void => {
  window.localStorage.setItem('boardConectFour', JSON.stringify(board))
  window.localStorage.setItem('turnConectFour', turn)
}
export const resetGameStorage = (): void => {
  window.localStorage.removeItem('boardConectFour')
  window.localStorage.removeItem('turnConectFour')
}