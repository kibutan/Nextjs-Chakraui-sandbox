import { Editable, EditableInput, EditablePreview,ButtonGroup,IconButton,Flex,useEditableControls } from "@chakra-ui/react";
import { CheckIcon,CloseIcon, EditIcon } from "@chakra-ui/icons";

export default function EditableExample(){
    function EditableControls() {
        const {
          isEditing,
          getSubmitButtonProps,
          getCancelButtonProps,
          getEditButtonProps,
        } = useEditableControls()
    
        return isEditing ? (
          <ButtonGroup justifyContent='center' size='sm'>
            <IconButton icon={<CheckIcon />} {...getSubmitButtonProps()} />
            <IconButton icon={<CloseIcon />} {...getCancelButtonProps()} />
          </ButtonGroup>
        ) : (
          <Flex justifyContent='center'>
            <IconButton size='sm' icon={<EditIcon />} {...getEditButtonProps()} />
          </Flex>
        )
      }
    return (
        <>
            <Editable defaultValue='Take some chakra'><EditablePreview /><EditableInput /></Editable>

            <Editable textAlign='center' defaultValue='Rasengan ⚡️' fontSize='2xl' isPreviewFocusable={false}><EditablePreview /><EditableInput /><EditableControls /></Editable>

        </>
    )
}