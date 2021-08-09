import styled from 'styled-components'
import {FaBars} from "react-icons/fa";

const Subheader = () => {
    return (
        <Container>
            <LeftMenu>
                <MenuItem>
                    <FaBars/>
                    <Text>All</Text>
                </MenuItem>
                <MenuItem>Gift Cards</MenuItem>
                <MenuItem>Buy Again</MenuItem>
                <MenuItem>Registry</MenuItem>
                <MenuItem>Beauty & Personal Care</MenuItem>
                <MenuItem>Coupons</MenuItem>
                <MenuItem>Pet Supplies</MenuItem>
                <MenuItem>Home</MenuItem>
                <MenuItem>Fashion</MenuItem>
                <MenuItem>Sports & Outdoors</MenuItem>
                <MenuItem>Best Sellars</MenuItem>
                <MenuItem>Health & Household</MenuItem>
                <MenuItem>Kindle Books</MenuItem>
                <MenuItem>Books</MenuItem>
            </LeftMenu>
            <RightMenu>
                <img src = {"https://images-na.ssl-images-amazon.com/images/G/15/digital/video/merch/2018/Magellan/AVD10797_SWMRush/Amazon_GW_DesktopSWM_AVD10797_MagellanRush_400x39_3_EN._CB485948682_.jpg"}></img>
            </RightMenu>
        </Container>
    )
}

export default Subheader

//styled componenets

const Container = styled.div`
    height: 39px;
    background-color: #232f3e;
    font-size: 14px;
    display: flex;
    color: white;
    line-height: 1rem;
    align-items: center;
`

const LeftMenu = styled.div`
    display: flex;
    align-items: center;
    flex-grow: 1;
    margin-left:2px;
`

const MenuItem = styled.div`
    display: flex;
    align-items: center;
    white-space: nowrap;
    justify-content: center;
    cursor: pointer;
    margin: 5px 0 6px 0;
    padding: 8px 12px;
    flex-grow: 1;
    :hover{
        border-color: #fff;
        border-radius: 2px;
        border: 1px solid;
        outline: 0;
        float: left;
        margin: 5px 0 6px 0;
        padding: 7px 11px;
        box-shadow: none;
        font-size: 14px;
        white-space: nowrap;
    }
`

const Text = styled.div`
    margin-left: 5px;
    font-weight: 600;
`

const RightMenu = styled.div`
    display: flex;
`
