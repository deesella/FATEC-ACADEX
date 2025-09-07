import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { Link } from 'expo-router'

const Home = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text>Notes</Text>
      </ScrollView>





{/* Footer */}

    <View style={styles.footer}>
        <View style={styles.footerText}>
            <Link style={{fontWeight: 'bold', color: '#fff'}} href="/">?</Link>
            <Link style={{fontWeight: 'bold', color: '#fff'}} href="/">?</Link>
            <Link style={{fontWeight: 'bold', color: '#fff'}} href="/">P</Link>
            <Link style={{fontWeight: 'bold', color: '#fff'}} href="/notes">N</Link>
            <Link style={{fontWeight: 'bold', color: '#fff'}} href="/">?</Link>
        </View>
          </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50,
    },
    footer: {
        backgroundColor: "red",
        paddingBottom: 72,
        paddingTop: 10,
    },
    footerText:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        textAlign: 'center',
    }

})