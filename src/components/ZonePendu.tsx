
interface ZonePenduProps {
  errors: string[];
}
const ZonePendu = ({errors}:ZonePenduProps) => <div>ZonePendu {errors.length}</div>

export default ZonePendu;