import * as S from './styles'

export type TelefoneLogoProps = {
  size?: '15px'
}

const TelefoneLogo = ({ size = '15px' }: TelefoneLogoProps) => (
  <S.Wrapper size={size}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 30 30"
      role="img"
      aria-label="Telefone"
    >
      <path
        fill="currentColor"
        d="M23.71 26.301l-1.633-1.633c5.33-5.33 5.33-14.004 0-19.334l1.632-1.633c6.23 6.232 6.23 16.368.001 22.6zm-2.822-19.78l-1.633 1.631c3.776 3.776 3.776 9.92 0 13.696l1.635 1.631c4.672-4.673 4.672-12.284-.002-16.958zm-2.912 2.913l-1.633 1.634a5.57 5.57 0 010 7.869l1.633 1.633c3.069-3.071 3.069-8.068 0-11.136zM1.938 8.445a101.548 101.548 0 00-.309 6.383h-.01c.001.058.005.114.005.172 0 .059-.004.115-.005.171h.011c.038 2.13.137 4.26.309 6.384.445 5.56 4.814 9.252 9.098 8.294.188-.038.384-.04.561-.112 1.043-.434 1.907-1.241 2.87-1.837 1.228-.77-1.419-7.3-3.059-6.457-.606.316-2.28 1.553-2.953 1.646-.601.084-1.071-.711-1.131-1.445-.157-1.938-.015-4.414-.003-6.472h.003l-.001-.171.001-.171h-.004c-.012-2.058-.154-4.534.003-6.472.06-.735.53-1.531 1.131-1.445.673.093 2.347 1.33 2.953 1.646 1.64.843 4.286-5.689 3.059-6.457-.963-.597-1.827-1.405-2.87-1.837-.177-.074-.374-.075-.561-.113-4.284-.959-8.652 2.734-9.098 8.293z"
      />
    </svg>
  </S.Wrapper>
)

export default TelefoneLogo
