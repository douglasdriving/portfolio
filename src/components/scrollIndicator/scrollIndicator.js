import '../../App.css';

export default function ScrollIndicator() {
  return (
    <p style={
      {
        position: 'absolute',
        bottom: 0,
        width: '100%',
      }}>
      ↓
    </ p >
  );
}