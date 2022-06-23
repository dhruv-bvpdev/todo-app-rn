import { useState, useCallback } from 'react'
import TaskItem from '../components/task-item'
import { Center, VStack } from 'native-base'
import ThemeToggle from '../components/theme-toggle'

export default function MainScreen() {
  const [checked, setChecked] = useState(false)
  const handlePressCheckbox = useCallback(() => {
    setChecked(prev => !prev)
  }, [])
  return (
    <Center
      _dark={{ bg: 'blueGray.900' }}
      _light={{ bg: 'blueGray.50' }}
      flex={1}
    >
      <VStack space={5} alignItems="center" w="full">
        <TaskItem
          isDone={checked}
          onToggleCheckbox={handlePressCheckbox}
          subject="Task Item"
        />
        <ThemeToggle />
      </VStack>
    </Center>
  )
}
