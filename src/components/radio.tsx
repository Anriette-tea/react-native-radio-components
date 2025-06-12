import React from "react"
import { View, TouchableWithoutFeedback, StyleSheet } from "react-native"

export const RadioContext = React.createContext<any>(null)

export interface RadioProps {
  isSelected?: boolean
  activeColor?: string
  disabled?: boolean
  index: number
  value?: any
  style?: object
  children?: React.ReactNode
  color?: string
}

export interface RadioContextProps {
  onSelect?: (...args: any) => void
  size?: number
  thickness?: number
  color?: string
  highlightColor?: string
}

const Radio: React.FC<RadioProps> = ({ 
  disabled, 
  index, 
  value, 
  isSelected, 
  activeColor, 
  color, 
  style, 
  children 
}) => {

  const context = React.useContext<RadioContextProps>(RadioContext)

  const getStyle = (): object => {
    return {
      width: context.size,
      height: context.size,
      borderRadius: context.size && (context.size / 2),
      borderWidth: context.thickness,
      borderColor: isSelected && activeColor ? activeColor : context.color
    }
  }

  const getNotStyle = (): object => {
    return {
      height: context.size && (context.size / 2),
      width: context.size && (context.size / 2),
      borderRadius: context.size && (context.size / 4),
      backgroundColor: color || activeColor,
    }
  }

  return (
    <View style={{ opacity: disabled ? .4 : 1 }}>
      <TouchableWithoutFeedback
        disabled={disabled}
        onPress={() => context.onSelect && context.onSelect(index, value)}
      >
        <View style={[styles.container, style, isSelected ? { backgroundColor: context.highlightColor } : null]}>
          <View style={[styles.radio, getStyle()]}>
            {isSelected && <View style={getNotStyle()} />}
          </View>
          <View style={styles.item}>
            {children}
          </View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexDirection: 'row',
    padding: 10,
  },
  radio: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    marginLeft: 5,
    alignItems: 'center',
    justifyContent: 'center',
  }
})

export default Radio
